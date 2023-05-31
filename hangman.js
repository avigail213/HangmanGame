//תוכנית
let word=' ',id=1;
let c=0, l;
// let arr=[];
let x=0;
let newWord=[];
function program(){
    l=document.getElementById('theLetter');
    printTheLetter1(l);
    l.value='';
}
//הגרלת מילה
function random(){
    let wordArr=["red","green","black","white","orange","grey","pink","gold","brown","blue","yellow"];
    let c=Math.random()*10;
    c=Math.round(c);
    return wordArr[c];
}
j=0;
//הדפסת קווים
function inputLinesByWordLength(){
    let p;
    word=random();
    console.log(word);
    let row=document.getElementById('pass');
    row.innerHTML="";
    for(let i=0; i<word.length; i++)
    {
        p=document.createElement('p');
        p.setAttribute('id',`${word[i]}`)
        row.append(p);
    }
}
//מגלה את האיש תלוי
function findHangman(){
    let hangman=document.getElementById(id);
    hangman.style.backgroundColor= 'unset';
}
//function printTheLetter(l)
//{// debugger;
 //   let arr=document.querySelectorAll(`#${l}.value`);
//    for(let i=0;i<arr.length;i++)
//    arr[i].textContent=l;  
//}
//הדפסת האותיות מעל הקווים
function printTheLetter1(){
    
   let arr=document.querySelectorAll(`#${l.value}`);
    //for(let i=0;i<arr.length;i++)
    //    arr[i].textContent=l.value;
    if(id>=12)
    {
        window.location.replace('file:///D:/Documents/%D7%9E%D7%A1%D7%9E%D7%9B%D7%99%D7%9D/Hangman%20game/loser.html');
        return;
     
            }
        for(i=0; i<arr.length; i++)
        {
             arr[i].textContent=`${l.value}`;
            //printTheLetter(l); 
        
        }
        for(let i=0; i<word.length; i++)
            if(word[i]===l.value)
                x++
        //debugger
        if(arr.length===0)
        {
            findHangman(id);
            id++;
        }
        if(x==word.length)
        {
            window.location.replace('file:///D:/Documents/%D7%9E%D7%A1%D7%9E%D7%9B%D7%99%D7%9D/Hangman%20game/winer.html');
           return;
        }
}

  
  
  
  