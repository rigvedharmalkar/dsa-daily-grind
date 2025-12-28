
class solution:
    
    def __init__(self,arr):
        self.arr  = arr
        
    
    def longest_substring(self):
        
        rp = 0 
        lp = 0
        dictt = {}
        max_len = 0 

        while rp < len(self.arr):

            if self.arr[rp] not in dictt:
                dictt[self.arr[rp]] = rp
                
                
                

            else:
                if lp <= dictt[self.arr[rp]]:
                    lp = dictt[self.arr[rp]] + 1
                dictt[self.arr[rp]] = rp 
            length = rp - lp + 1
            max_len = max(max_len,length)
            rp += 1
        return max_len
    
ll= solution("tmmzuxt")
print(ll.longest_substring())



