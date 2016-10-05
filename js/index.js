var n = +prompt("Сколько чисел вы хотите получить?");

    function fibo(n) 
    {
        if (n <= 1)
            return 0;
        else if (n <= 2)
            return 1;
        else 
            return fibo(n - 1) + fibo(n - 2);
    }
    
    function fiboString(n)
    {
        if (n <= 1) 
            return fibo(1);
        else
            return fiboString(n - 1) + ', ' + fibo(n);            
    }
    
    alert(fiboString(n));
