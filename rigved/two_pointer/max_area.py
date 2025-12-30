
class solution:

    def __init__(self,arr):
        self.arr = arr

    def max_area(self):

        max_sum = 0
        lp = 0
        rp = len(self.arr) - 1


        while lp < rp:

            sum = min(self.arr[lp],self.arr[rp]) * (rp - lp)
            max_sum = max(sum,max_sum)

            if self.arr[lp] > self.arr[rp]:
                rp -= 1
            elif self.arr[rp] > self.arr[lp]:
                lp += 1
            else:
                lp += 1
        return max_sum
    
ll = solution([1,7,2,5,4,7,3,6])
print(ll.max_area())
