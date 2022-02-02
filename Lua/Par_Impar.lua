local function Num(number)
    if (number%2 == 1) then
        return false
    else return true
    end
end

Boolean = Num(math.random(1,9))
print(Boolean)