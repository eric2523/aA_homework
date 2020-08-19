class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = Array.new
  end

  def play
    until game_over
      self.take_turn
    end
    self.game_over_message
    self.reset_game
  end

  def take_turn
    unless game_over 
      self.show_sequence
      self.require_sequence
      self.round_success_message if !game_over
      self.sequence_length += 1
    end
  end

  def show_sequence
    self.add_random_color
    seq_str = ""
    self.seq.each {|color| seq_str += "#{color}..."}
    puts seq_str
    sleep(2)
    system("clear")
    puts "can you remember?"
  end

  def require_sequence
    player_seq = []
    while player_seq.length < self.seq.length
      puts "Enter color sequence:"
      input = gets.chomp
      player_seq.push(input)
    end
    self.game_over = true if player_seq != self.seq 
  end

  def add_random_color
    seq.push(COLORS.sample)
  end

  def round_success_message
    puts "Wow.. You actually passed. Please Continue."
    puts "Your Score: #{self.sequence_length}"
  end

  def game_over_message
    puts "You need to work on your memory!"
    puts "Your Score: #{self.sequence_length}"
  end

  def reset_game
    self.sequence_length = 1
    self.game_over = false
    self.seq = Array.new
  end
end

# ---- Play Game ---- 
# new_game = Simon.new
# new_game.play