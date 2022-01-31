local tb1 = {
    "1";
    "2";
    "3";
    "4";
    "5";
    "6";
    "7";
    "8";
    "9";
    "10"
}



for _,n in pairs(tb1) do
    print("Tabuada do "..n.. "\n")
    for __,nn in pairs(tb1) do
        print(__ .. "x" .. n .. " = ".. n *__)
    end
    print("--------------------------------------")
end