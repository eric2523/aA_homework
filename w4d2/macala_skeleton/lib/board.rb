require "byebug"

class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @cups = Array.new(14) do |i| 
      i == 13 || i == 6 ? Array.new(0) :  Array.new(4){:stone} 
    end
    @name1 = name1
    @name2 = name2

  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
  end

  def valid_move?(start_pos)
    raise 'Invalid starting cup' if !start_pos.between?(0, 13)
    raise 'Starting cup is empty' if cups[start_pos].empty?
  end

  def make_move(start_pos, current_player_name)
    count = self.cups[start_pos].length 
    self.cups[start_pos] = []
    ending_cup_idx = ((start_pos + count) % 14)

      (start_pos + 1..ending_cup_idx).each do |cup_idx|
        # debugger
        # idx = cup_idx % 13
          if current_player_name == @name1
            self.cups[cup_idx] += [:stone] if cup_idx != 13
          else
            self.cups[cup_idx] += [:stone] if cup_idx != 6
          end
      end
      self.render
      # debugger
      self.next_turn(ending_cup_idx)
  end

  def next_turn(ending_cup_idx)
    # helper method to determine whether #make_move returns :switch, :prompt, or ending_cup_idx
    # debugger
    if self.cups[ending_cup_idx].length == 1
      :switch
    elsif ending_cup_idx == 6 || ending_cup_idx == 13
      :prompt
    else
      ending_cup_idx
    end
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
     @cups.take(6).all? { |cup| cup.empty? } ||
    @cups[7..12].all? { |cup| cup.empty? }
  end

  def winner
    player1_count = @cups[6].count
    player2_count = @cups[13].count

    if player1_count == player2_count
      :draw
    else
      player1_count > player2_count ? @name1 : @name2
    end
  end
end
