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
    def enqueue(el)
        
    end

    def dequeue
        
    end

    def peek
        
    end

end

