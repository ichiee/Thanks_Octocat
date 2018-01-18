/*
=========================================================================
catch up with basic vanilla JS

=========================================================================



++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
DOM
https://www.youtube.com/playlist?list=PL4cUxeGkcC9gfoKa5la9dsdCNpuey2s-V
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
            const booklist= documen.querySelector('book.textContent = 'test');
            console.log(booklist.innerHTML);
                // all the elements insede book list
            bookList.innerHTML = '<h2> Coconuts! </h2>';
                // replece allthe elements inside to Coconuts!
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


https://www.youtube.com/watch?v=VMRo6Uv856E&list=PL4cUxeGkcC9gfoKa5la9dsdCNpuey2s-V&index=7
