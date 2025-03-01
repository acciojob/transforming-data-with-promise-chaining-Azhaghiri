 document.getElementById('btn').addEventListener('click', () => {
            
       
        let ip = document.getElementById('ip').value;

    function resolveNumber() {
         return new Promise((resolve) => {
            setTimeout(() => {
            const number = ip;
            document.getElementById('output').innerText = "result: "+ number;
            resolve(number);
        },2000);
    });
    }

        resolveNumber()
        .then((number) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const multipleNum = number * 2;
                    document.getElementById('output').innerText = "result: "+ multipleNum;
                    resolve(multipleNum);
                }, 1000);
            });
        })
        .then((multipleNum) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const subNum = multipleNum - 3;
                    document.getElementById("output").innerText = "result: "+ subNum;
                    resolve(subNum);
                }, 1000);
            });
        })
        .then((subNum) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const divideNum = subNum / 2;
                    document.getElementById("output").innerText = "result: "+ divideNum;
                    resolve(divideNum);
                }, 1000);
            });
        })
        .then((divideNum) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const addNum = divideNum + 10;
                    document.getElementById("output").innerText = "Final Result: "+ addNum;
                    resolve(addNum);
                }, 1000);
            })
        })

    

    });