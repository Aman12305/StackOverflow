import avatar1 from '../assets/1.png';
import avatar2 from '../assets/2.png';
import avatar3 from '../assets/3.png';
import avatar4 from '../assets/4.png';
import avatar5 from '../assets/5.png';
import avatar6 from '../assets/6.png';
import avatar7 from '../assets/7.png';
import avatar8 from '../assets/8.png';
import avatar9 from '../assets/9.png';
import avatar10 from '../assets/10.png';
import avatar11 from '../assets/11.png';
import avatar12 from '../assets/12.png';

const userAvatar = [
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar7,
    avatar8,
    avatar9,
    avatar10,
    avatar11,
    avatar12
]

const sendAvatar = () =>{
    return userAvatar[Math.floor(Math.random() * 12)]
}

const alltags = [
    {
        tagname:"javascript",
        tagdescription:"For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Keep in mind that JavaScript is NOT the same as ",
        tagquestions:"2458502"
    },
    {
        tagname:"python",
        tagdescription:"Python is a multi-paradigm, dynamically typed, multi-purpose programming language. It is designed to be quick to learn, understand, and use, and enforces a clean and uniform syntax.",
        tagquestions:"2154602"
    },
    {
        tagname:"java",
        tagdescription:"Java is a high-level object-oriented programming language. Use this tag when you're having problems using or understanding the language itself. This tag is frequently used alongside..",
        tagquestions:"1787899"
    },
    {
        tagname:"c#",
        tagdescription:"C# (pronounced 'see sharp') is a high-level, statically typed, multi-paradigm programming language developed by Microsoft. C# code usually targets Microsoft's .NET family of tools and run-times",
        tagquestions:"1245502"
    },
    {
        tagname:"php",
        tagdescription:"PHP is a widely used, open source, general-purpose, multi-paradigm, dynamically typed and interpreted scripting language designed initially for server-side web development. Use this tag for questions ??? ",
        tagquestions:"5648502"
    },
    {
        tagname:"android",
        tagdescription:"Android is Google's mobile operating system, used for programming or developing digital devices (Smartphones, Tablets, Automobiles, TVs, Wear, Glass, IoT). For topics related to Android, use ",
        tagquestions:"8564321"
    },
    {
        tagname:"c++",
        tagdescription:"C++ is a general-purpose programming language. Initially, it was designed as an extension to C and has a similar syntax, but it is now a completely different language. Use this??? ",
        tagquestions:"7546302"
    },
    {
        tagname:"jquery",
        tagdescription:"jQuery is a JavaScript library. Consider also adding the JavaScript tag. jQuery is a popular cross-browser JavaScript library that facilitates Document Object Model (DOM) traversal, event handling??? ",
        tagquestions:"1258502"
    }
]

export {alltags,sendAvatar,userAvatar};