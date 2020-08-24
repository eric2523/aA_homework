require "byebug"

class LRUCache
    attr_reader :size
    # debugger
    def initialize(size)
        #cache can take in any type of data structure
        @cache = []
        @size = size 
    end

    def count
      # returns number of elements currently in cache
      cache.length
    end

    def add(el)
      # adds element tocache according to LRU principle
        if count < self.size 
            cache.push(el) 
        else
            case cache_includes?(el)
            when false 
                cache.delete(least_recent)
                cache.push(el)
            when true && (least_recent == el)
                cache.push(cache.shift)
            when true && (least_recent != el)
                cache.delete(el)
                cache.push(el)
            end
        end
    end

    def show
      cache
    end

    private
    attr_reader :cache
    # helper methods go here!
    def cache_includes?(el)
        cache.include?(el)
    end

    def least_recent
        cache.first
    end
end

