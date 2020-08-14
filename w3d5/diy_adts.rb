class Stack
    attr_reader :stack

    def initialize
        @stack = []
    end
    
    def push(el)
        stack.push(el) 
    end

    def pop
        stack.pop
    end

    def peek
        stack.first
    end
end

class Queue
    attr_reader :queue 

    def initialize
        @queue = []
    end

    def enqueue(el)
        queue.unshift(el)
    end

    def dequeue
        queue.shift
    end

    def peek
        queue.first
    end
end

class Map
    attr_reader :map

    def initialize
        @map = []
    end

    def set(key, value)
        updated = false 
        pair = [key, value]
        map.each.with_index do |p, i|
            if p.include?(key)
                map[i] = pair 
                updated = true
            end
        end
        map.push(pair) if !updated
        true
    end

    def get(key)
        map.each do |p|
            return p.last if p.first == key 
        end
        return nil 
    end

    def delete(key)
        
    end

    def show
        
    end

end
