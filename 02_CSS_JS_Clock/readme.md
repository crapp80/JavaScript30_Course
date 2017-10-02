# CSS and JS Clock  

Pseudo Code Attempt:  

PROGRAM analogClock    
show Second Hand;  
show Minute Hand;  
show Hour Hand;  
IF (Second Hand has moved 60 times) // 1 Sec = 6 Degrees  
  move Minute Hand 1 time; // 1 Min = 6 Degrees  
END  
IF (Second Hand has moved 60 times & Minute Hand has moved 60 times)  
  move Hour Hand 1 time; // 1 Hour = 30 Degrees    
END  

## Things to remember:  

Build a circle in CSS:  

```css
   .clock {  
     width: 30rem; // width + height must be equal
     height: 30rem;  
     border: 20px solid white;
     border-radius: 50%;  // border-radius must be >= 50%    
     margin: 50px auto;  
     position: relative;
     padding: 2rem;  
     box-shadow:
       0 0 0 4px rgba(0,0,0,0.1), // offset-x | offset-y | blur-radius | spread-radius | color  
       inset 0 0 0 3px #EFEFEF,  // first inner shadow (inset)  
       inset 0 0 10px black, // second inner shadow
       0 0 10px rgba(0,0,0,0.2);
   }
```

Style Clock Hands for analog Clock

```css
    .hand {
      width: 50%;
      height: 6px;  
      background: black;  
      position: absolute;
      top: 50%;
      transform-origin: 100%; // Moves the turning point of the hand to the right end. Default turning point is middle (50%)
      transform: rotate(90deg);
      transition: all 0.05s;  
      transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);  
    }
```

Add a digital Clock

```javascript
    document.getElementById('digitalClock').innerHTML = now.getHours() + ':' + ('0'+now.getMinutes()).slice(-2) + ':' + ('0'+now.getSeconds()).slice(-2); // add a 0 to minutes and seconds first, then use slice(-2) to take the rightmost 2 characters
