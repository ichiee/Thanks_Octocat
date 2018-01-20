/*
=========================================================================
catch up with basic vanilla JS

=========================================================================



++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
DOM
https://www.youtube.com/playlist?list=PL4cUxeGkcC9gfoKa5la9dsdCNpuey2s-V
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


useful syntax:

Array.isArray(Array.from(titles)
document.querySelector("wrapper");

element.style // adding css attribute, li.style.color (li is created li element)



*/

// getElementBy ------------------------------------------

var someId = document.getElementById('someId')  
    // <dic id+"someId">...</div>
    // can by ByClass Name, Name and etc 


    var titles = document.getElemetsbyClassName('title');
        // retrieve collection of elements (by class name)
        // ClassName grab all the elements has the class name
        // [h1.title, h2.title] HTML collection it is abit like array but not array
        
    titles[0];
        // <h1 class="title">space ship</h1>
        
    
    console.log(Array.isArray(Array.from(titles));
        // isArray()boolien - true
        // Array.from() make array from the one in param
    
    Array.from(title).forEach(item){
    }
        // You can use the method this way
    

    vat lis = getElementsByTagName('li');
        // [li,li,li,li]  - HTML collection
    lis[1];
        //<li>...</li>


// querySelecter-------------------------------------------

    const wrap = document.querySelector("wrapper");
        // <div id='wrapper'>...</div>
        
    const wmf = document.querySelector("#book-list li:nth-child(2) .name");    
        // <span class = 'name'> The Wise </span>

    const books = document.querySelectorAll("#book-list .name");  
        //  [span.name, span.name, span.name, span.name]
        // even one return, it will be in [] it is called node list here
        // if you use quarySelector you get only the first one to match 
        
    books.forEach(function(book){    });
        // you can use forEach() directly onto NodeList
    
    
// Changing TEXT and HTML element -------------------------------

    // textContent  
        book.forEach(function(book){
            console.log (book.testContent);
            // all the text content of the elemets
        book.textContent = 'test';
            // over written the text part
        book.textContent += '(book title)';
            // append
        });
    
    // innerHTML    
        const booklist= documen.querySelector('book.textContent = 'test'");

        console.log(booklist.innerHTML);
            // all the elements inside book list
        bookList.innerHTML = '<h2> Coconuts! </h2>';
            // replece all the elements inside to Coconuts!
        bookList.innerHTML += '<p>this is how to add </p>';
            // append - will at the END of the all elements
 

// nodes------------------------------------------------------- 

    /*
    everything in element is node
    text node
    comment node
    */

    // nodeType 
        banner.nodeType
            // property, 1, https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
        
        banner.nodeName
            // property, return i.e. DIV - elements name
            
        banner.hasChildNodes();
            // method, booliean
            
        var clonedNode = banner.cloneNode(true);
            // true is including all nested elements.
            // idf not, it will just pick the single element <div id = "book-list">...</div>


// traversing the DOM ------------------------------------------------------------------

    const bookList = document.querySelector('book-list');
    bookList.parentNode;    
    bookList.parentElement;
    // <div id = "wrapper">...</div>'
    // go above the node to the parent node
    // you can chain it together to make one more parent node
    bookList.parentElement.parentElement;

    console.log (bookList.childNode)
    // return [text, h2.title, text, ul, text]
    // when you pen it it show an arrow - it means lin break, and shows it as text on console

    bookList.child
    // without text [h2.title, ul]

    //siblings
    console.log (bookList.nextSibling)
    // shows #text on console, this is the next sibling this is line break

    console.log (bookList.nextElementSibling)
    //<div>next diblin element </div>

    bookList.previousSibling
    bookList.previousElementSibling
    // for previous sibling

    // you can chain to be creative
    bookList.previousElementSibling.querySelector('p').innerHTML += '<br/>';
    // let's say if the previousElementSibling is <header>...</header>
    // query selecter select element from within the header tag then append


// Events ------------------------------------------------------------------------
    //https://www.w3schools.com/jsref/dom_obj_event.asp

    var h2 = document.querySelector("#book-list h2");
    
    h2.addEventlistener ('click', function(e){   });
    // function is what is going to be fired once the event happens
    // automatically takes a pram - event 
    console.log(e.target);
    //<h2 class = "title">fast </h2>
    console.log(e);
    // we get event object - many stuff
    
    var btns = document.querySelectorAll('.delete');
    bts.forEach(function(btn){
     btn.addEventListener('click', function (e){
         const li = e.target.parentElement;
         // use target object to manumilate DOM
         li.parentNode.removeChild(li)
         // parent.removeChild() delete whateven passed in
         // when delete, everything nested also will be deleted
     });   
    });

    // if you want it to prevent default
    const link = document.wuerySelector('page-banner a');
    link.addEventListner('click', function (e){
        e.preventDefault();
        // it will prevent default action
        // in this case navigating to different wen - ancher
        console.log ("this navibgation: ". e.target.textContent . "was prevented")
    })


//Event Bubbling --------------------------------------------------------------------

    /* this is better solution 
    as you can apply the function associate to the event to nementwly made element
    */


    const list = document.querySelector('book-list ul');
        list.addEventListner('click', function (e){
            // eventLister on parent node
        if (e.target.className == 'delete'){
            //if the click target's class name is delete
            //- which is in span tag under li in thuis example <spam class = "delete>...</delete>
            const li = e.target.parentElement;
            // li tag one
            list.removeChild(li);
            // link is the same as li.parentNode

        }
    // it will prevent default action
    // in this case navigating to different wen - ancher
    console.log ("this navibgation: ". e.target.textContent . "was prevented")
    })  


// Interacting with forms -------------------------------------------------------------

    document.forms 
    // it will return html collection (array like [])of form elements 
    // access to each elements by array number or id name
    document.forms[0];
    document.forms['add-book'];

    const addForm = document.forms ['add-book'];
    // addForm is an element with form tag with id='add-book' attribute

    addForm.addEventListener('submit', function (e){
        // attach the 'submit' on form not the btn
        e.preventDefault();
        const value = addForm.querySelector("input [type ='text']").value;
        // takes the value of text input
        
        // create elements
        const li = document.createElement('li'); // creating <li></li>
        const bookName = document.createElement('span');
        const deleteBtn = document.createElement('span');
        
        // add content
        deleteBtn.textContent = 'delete';
        bookName.textContent = value;
        
        // add classes
        bookName.classList.add('name');     
        // eficient way to add and remove class instead of over write all
        deleteBtn.classList.add('delete');
        // append to document
        li.appendChild(bookName);
        li.appendChild(deleteBtn);
        list.appendChild(li);       //const list = document.querySelector('book-list ul');
        // so appendChild nest at the last of the tag
        
    })
    

// attribute ----------------------------------------------------------------------------------
    
    // work with CSS attribute
        li.style.color = "red";     // li is element here
        li.className = "book"       // you bvcan add addional style on .book on separate css file, it works
    

    // reach and grab attribute
        book.getAttribute('class')  // param - as string
        // returns book elements class attribute
        // if ask for something it doesnt have, retun null

                                            
    // change attribute
        book.setAttribute('class', 'name-2') 
        // chass attribute change to "name-2"
        // this is generic way to do

    book.hasArttribute('class')
    // boolean


    
// change event
// check box / radio 

    // html bit
    <input type = "checkbox" id = "hide"/>
    <label for =  "hide"> Hide all books </label>

    // when click the check box hide all the list
    // grab ref of checkbox

    const hideBox = document.wueySelector ('#hide');
    hideBox.addEventListener ('change', function (e){
        if (hideBox.checked) {
            // check checked attribute
            list.style.display = "none";        // "none" not to be displayed
        }else{
            list.style.display = "initial";     // "initial" is default value
        }
    }
     
                          
                          
                          
// Custom serch filter - serch box ------------------------------------
    //attach even listener on text input
                          
    // filter books
    const searchBar = document.forms['search-books'].querySelector('input');
    searchBar.addEventListener('keyup', function(e){
        const term = e.target.toLowerCase();
        const books = list.getElementsByTagName('li');
        Array.from(books).forEach(function (book){
            const title = book.firstElementChild.textContent;
            if (title.toLowerCase().indexOf(term) != -1){
                book.style.display = 'block';
            }else{
                book.style.display = 'none';
            }               
        }    
     
  // using dataset tab ----------------------------------------                                    
     
     // tab content
     const tabs = documnt.querySelector('.tabs');           
     // this is ul child nodes of this is li which are tubs
     const panels = document.querySelectorAll ('.panel');
     // each panel has all the written contents associate to a tab
            
     tabs,addEventListener('click', function (e){
         if (e.target.tagName == "LI"){
         //capital LI - it will check through if there is li tag 
             const tagetPane; = document.querySelector(e.target.dataset.target);
             // e.target is the li elements, 
             // dataset meand it will look for attribute has"data" string
             // target as the attribute is data-target, 
             // the value of it is corresponding with id name of panel
            if (panel == targetPanel){
                panel.classList.add('active');
                
            }else{
                panel.classList.remove('active);
         
            }
     });
                
   // DOM content loaded ----------------------------------------------
           //wrap with
           document.addEventListner('DOMCuntentLoaded', function (){})
                //if in case the js script has been linked at the top of the document
                // the same as jWuery.ready ($.ready, or just as $())
                
                          
                          
                          
