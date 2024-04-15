---
sidebar_position: 2
---

# Simulare

## Subiectul I:
```bash
1. d
2. b
3. a
4. d
5. c
```

## Subiectul al II-lea:
1.
```bash
a) 474
```
```bash
b) 521, 531, 5021, 5031
```
c)
```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, cn, x, c, p;

    cin >> n;

    x = 5;

    do{
        cn = n; n = 0; p = 1;
        do{
            c = cn % 10;
            if(c == x) c = 5 - c;
            n = c * p + n; cn = cn / 10; p = p * 10;
        }while(cn != 0);
        x--;
    }while(x != 0);

    cout << n;

    return 0;
}
```
d.
```cpp
citeste n
┌pentru i<-1, 5 executa
|   cn<-n ...etc
|   ...etc
|  └până când cn=0
└
scrie n
```
2.
```bash
[1, 6], [2, 7] si [3, 4] (Formam nodurile astfel incat sa aiba grade pare)
```
3.
```cpp
for(i = 1; i <= 5; i++)
    for(j = 1; j <= 5; j++)
        if(j <= 5 - i + 1)
            a[j][i] = 5 - i;
          else
            a[j][i] = a[j-1][i] + 1;
```

## Subiectul al III-lea:
1.
```cpp
void NrImp(int x, int y, int &nr){
    nr = 0; int i, div, contor;

    for(i = x; i <= y; i++){
        contor = 0;
        for(div = 1; div <= i; div++)
            if(i % div == 0 && div % 2 == 1)
                contor++;
        if(contor == 3)
            nr++;
    }
}
```
2.
```cpp
#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    char sir[100], multime[3][5] = {"fam.", "gen.", "spe."}, *p;

    cin.get(sir, 100);

    p = strtok(sir, " ");

    while(p){
        if(p[strlen(p)-1] == '.'){
            if(p[0] == 'F') cout << multime[0] << " ";
            else if(p[0] == 'G') cout << multime[1] << " ";
            else if(p[0] == 'S') cout << multime[2] << " ";
        }
        else cout << p << " ";
        p = strtok(NULL, " ");
    }

    return 0;
}
```
3.
a)
```bash
Algoritmul proiectat afiseaza pe ecran temperaturile la care este supus metalul prin citirea permanenta din fisier si comparara valorii actuale cu un maxim. Indicele se afiseaza in cazul in care gasim o valoare mai mare decat ce am gasit deja, sau daca avem o valoare egala cu maximul nostru, dar care nu se afla pe pozitii consecutive.
Algoritmul proiectat este eficient din punct de vedere al timpului, deoarece este unul liniar, avand complexitatea "O(n)", unde 'n' este numarul de elemente din fisier.
Algoritmul proiectat este eficient din punct de vedere al memoriei, deoarece utilizeaza variabile simple si nu tablouri.
```
```cpp
b)
#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    ifstream f("bac.txt");

    int valoare, anterior = -1, indice = 0, tempMax = 0;

    while(f >> valoare){
        indice++;
        if(valoare > tempMax || tempMax == valoare && anterior != valoare){
            tempMax = valoare;
            cout << indice << " ";
        }
        anterior = valoare;
    }

    f.close();

    return 0;
}
```