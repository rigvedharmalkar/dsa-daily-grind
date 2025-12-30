
class solution:
    def __init__(self,arr,target):
        self.arr = arr
        self.target = target

    def twosum(self):

        lp = 0 
        rp = len(self.arr) - 1


        while lp < rp:

            if self.arr[lp] + self.arr[rp] > self.target:
                rp -= 1
            elif self.arr[lp] + self.arr[rp] < self.target:
                lp += 1
            else:
                return [lp+1,rp+1]
            
ll = solution([2,3,4],6)
print(ll.twosum())


        

