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
