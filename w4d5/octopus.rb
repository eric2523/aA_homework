require "byebug"

def sluggish_octo(arr_of_fish)
    longest = false
    arr_of_fish.each do |fish|
        longest = fish 
        arr_of_fish.each do |fishy|
            longest = fishy if longest.length < fishy.length
        end
    end
    longest
end

def dominant_octopus(arr_of_fish)
    pivot = arr_of_fish.first
    greater = arr_of_fish.select {|fish| fish.length > pivot.length}
    if greater.empty?
        return pivot 
    else
       return dominant_octopus(greater)
    end
end

def clever_octopus(arr_of_fish)
    longest = false
    arr_of_fish.each do |fish|
        longest = fish if !longest || fish.length > longest.length
    end
    longest
end

fishies = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

# p sluggish_octo(fishies)
# p dominant_octopus(fishies)
# p clever_octopus(fishies)

def slow_dance(direction, tiles_array)
    tiles_array.each.with_index do |move, i|
        return i if move == direction
    end
end

def fast_dance(direction, new_tiles_data_structure)
    new_tiles_data_structure[direction]    
end

new_tiles_data_structure = {
   "up" => 0, 
   "right-up" => 1, 
   "right" => 2,
   "right-down" => 3,
   "down" => 4,
   "left-down" => 5,
   "left" => 6,
   "left-up" => 7
}

tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]

# p slow_dance("up", tiles_array)
# p slow_dance("right-down", tiles_array)
# p fast_dance("up", new_tiles_data_structure)
# p fast_dance("right-down", new_tiles_data_structure)