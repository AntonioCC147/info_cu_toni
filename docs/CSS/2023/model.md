---
sidebar_position: 1
---

# Modelul Oficial

## Subiectul I:
```bash
1. b
2. d
3. a
4. c
5. d
```
## Subiectul al II-lea:
1.
```bash
a) 90
```
```bash
b) 70, 71 (Orice numar din intervalul [70, 74])
```
c)
```cpp
#include <iostream>
using namespace std;

int main()
{
    int m, n, p, q, s, x;

    cin >> m >> n >> p >> q;

    s = 0;

    for(x = p; x <= q; x++)
    {
        if(x % m == 0 || x % n == 0)
            s = s + x;
        if(x % m == 0 && x % n == 0)
            s = s - x;
    }

    cout << s;

    return 0;
}
```
d)
```cpp
citeşte m,n,p,q (numere naturale nenule, p≤q) 
s<-0; x<-p
┌cât timp x≤q execută
│ ┌dacă x%m=0 sau x%n=0 atunci 
│ │ s<-s+x 
│ └■
│ ┌dacă x%m=0 şi x%n=0 atunci 
│ │ s<-s-x 
│ └■
│  x<-x+1
└■
 scrie s
 ```
2.
```cpp
if(c[2].rezultat > c[1].rezultat && c[2].rezultat > c[0].rezultat){
    cout << c[2].nume << " ";
    if(c[1].rezultat > c[0]. rezultat)
        cout << c[1].nume << " " << c[0].nume;
    else
            cout << c[0].nume << " " << c[1].nume;
}
else if(c[1].rezultat > c[2].rezultat && c[1].rezultat > c[0].rezultat){
    cout << c[1].nume << " ";
    if(c[2].rezultat > c[0].rezultat)
        cout << c[2].nume << " " << c[0].nume;
    else
        cout << c[0].nume << " " << c[2].nume;
}
else if(c[0].rezultat > c[2].rezultat && c[0].rezultat > c[1].rezultat){
    cout << c[0].nume << " ";
    if(c[2].rezultat > c[1].rezultat)
        cout << c[2].nume << " " << c[1].nume;
    else
        cout << c[1].nume << " " << c[2].nume;
}
```
3.
```bash
7fantastic
```

## Subiectul al III-lea:
1.
```cpp
int DoiTrei(int n){
    int nr_2 = 0, nr_3 = 0, nr_cif = 0;

    while(n){
        if(n % 10 == 2) nr_2++;
        else if(n % 10 == 3) nr_3++;
        nr_cif++; n = n / 10;
    }

    if(nr_cif == nr_2 + nr_3)
        return 1;
    else
        return 0;
}

//Altă variantă

int DoiTrei(int n){
    while(n){
        if(n % 10 != 2 && n % 10 != 3)
            return 0;
        n = n / 10;
    }
    return 1;
}
```
2.
```cpp
#include <iostream>
using namespace std;

int main()
{
    int M[101][101] = {0}, n, i, j, k = 0;

    cin >> n;

    for(i = 1; i <= n; i++)
        for(j = 1; j <= n; j++){
            cin >> M[i][j];
            M[i][j]++;
        }

    for(i = 1; i <= n; i++)
        for(j = 1; j <= n; j++)
            if(M[i][j] == 4)
                if(M[i-1][j] != 1 && M[i+1][j] != 1 && M[i][j-1] != 1 && M[i][j+1] != 1){
                    cout << i << " ";
                    k = 1;
                }

    if(k == 0)
        cout << "nu exista";

    return 0;
}
```
3.
a)
```bash
Algoritmul proiectat determina cel mai mic număr par și impar din prima jumătate a șirului, dar și cel mai mare număr par și impar din a 2-a jumătate a șirului pentru a verifica toate condițiile cerute. În caz afirmativ, se va afișa mesajul "DA", altfel se va afișa mesajul "NU".
Algoritmul proiectat este eficient din punct de vedere al timpului de executare, întrucât acesta este unul liniar.
Algoritmul proiectat este eficient din punct de vedere al memoriei utilizate, întrucât acesta utilizează doar câteva variabile și nici măcar un tablou.
```
b)
```cpp
#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    ifstream f("bac.txt");

    int n, i, x, y, cmmpx = 1000001, cmmix = 1000001, cmMpy = -1, cmMiy = -1, k = 1;
    
    //cmmpx - Cel mai mic numar par din prima jumatate
    //cmmix - Cel mai mic numar impar din prima jumatate
    //cmMpy - Cel mai mare numar par din a doua jumatate
    //cmMiy - Cel mai mare numar impar din a doua jumatate

    f >> n >> x;

    for(i = 2; i <= n; i++){
        f >> x;
        if(x % 2 == 0 && x < cmmpx) cmmpx = x;
        if(x % 2 == 1 && x < cmmix) cmmix = x;
    }

    f >> y;

    for(i = n + 1; i <= 2*n; i++){
        f >> y;
        if(y % 2 == 0 && y > cmMpy) cmMpy = y;
        if(y % 2 == 1 && y > cmMiy) cmMiy = y;
    }

    cout << cmmpx << " " << cmmix << " " << cmMpy << " " << cmMiy;

    if(cmmpx > cmMiy && cmmix > cmMpy)
        cout << "DA";
    else
        cout << "NU";

    f.close();

    return 0;
}
```