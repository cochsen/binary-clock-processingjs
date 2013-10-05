Digit1 s1, m1, h1;
Digit2 s2, m2, h2;
Digit4 s4, m4, h4;
Digit8 s8, m8, h8;
Digit16 s16, m16, h16;
Digit32 s32, m32;

color BG = color(40, 40, 40);
color SEC = color(0, 255, 0);
color MIN = color(255, 0, 0);
color HR = color(0, 0, 255);

void setup() {
 size(384, 612); // change y back to 512
 
 s1 = new Digit1(260, 372, 90, 65, BG, SEC);
 m1 = new Digit1(165, 372, 90, 65, BG, MIN);
 h1 = new Digit1(70, 372, 90, 65, BG, HR);
  
 s2 = new Digit2(260, 302, 90, 65, BG, SEC);
 m2 = new Digit2(165, 302, 90, 65, BG, MIN);
 h2 = new Digit2(70, 302, 90, 65, BG, HR); 
  
 s4 = new Digit4(260, 232, 90, 65, BG, SEC);
 m4 = new Digit4(165, 232, 90, 65, BG, MIN);
 h4 = new Digit4(70, 232, 90, 65, BG, HR); 
  
 s8 = new Digit8(260, 162, 90, 65, BG, SEC);
 m8 = new Digit8(165, 162, 90, 65, BG, MIN);
 h8 = new Digit8(70, 162, 90, 65, BG, HR);
  
 s16 = new Digit16(260, 92, 90, 65, BG, SEC);
 m16 = new Digit16(165, 92, 90, 65, BG, MIN);
 h16 = new Digit16(70, 92, 90, 65, BG, HR); 
  
 s32 = new Digit32(260, 22, 90, 65, BG, SEC);
 m32 = new Digit32(165, 22, 90, 65, BG, MIN); 

}

void draw() {
 background(40, 40, 40); 
 
 int sec = second();
 
 s1.update1(sec);
 s2.update2(sec);
 s4.update4(sec);
 s8.update8(sec);
 s16.update16(sec);
 s32.update32(sec);

 int min = minute(); 
  
 m1.update1(min);
 m2.update2(min);
 m4.update4(min);
 m8.update8(min);
 m16.update16(min);
 m32.update32(min);

 int hr = hour();
  
 h1.update1(hr);
 h2.update2(hr);
 h4.update4(hr);
 h8.update8(hr);
 h16.update16(hr);
 
 fill(0, 255, 0);
 text("Second: " + (sec + 1), 260, 465);
 text("32 bit: " + int((sec + 1)/32), 260, 480);
 text("16 bit: " + int(((sec + 1) % 32) / 16), 260, 495);
 text("8 bit: " + int((((sec + 1) % 32) % 16) / 8), 260, 510);
 text("4 bit: " + int(((((sec + 1) % 32) % 16) % 8) / 4), 260, 525);
 text("2 bit: " + int((((((sec + 1) % 32) % 16) % 8) % 4) / 2), 260, 540);
 text("1 bit: " + int((sec + 1) % 2), 260, 555); 
  
}

abstract class Digit {
  float x, y, w, h;
  color off, on;
}

class Digit1 extends Digit {

  Digit1(float x, float y, float w, float h, color off, color on) { 
    this.x = x; 
    this.y = y;
    this.w = w; 
    this.h = h;
    this.off = off; 
    this.on = on;
  }
  
    void update1(int time) {
    int t = time;
    if (int((t + 1) % 2) == 1) {
      noStroke();
      rect(this.x, this.y, this.w, this.h); 
      fill(this.on);
    }
    else {
      noStroke();
      rect(this.x, this.y, this.w, this.h); 
      fill(this.off);        
    }
  }
}

class Digit2 extends Digit {

  Digit2(float x, float y, float w, float h, color off, color on) { 
    this.x = x; 
    this.y = y;
    this.w = w; 
    this.h = h;
    this.off = off; 
    this.on = on;
  }  
  
  void update2(int time) {
    int t = time;
    if (int(((((((t + 1) % 32) % 16) % 8) % 4 ) / 2)) == 1) {
      noStroke();
      rect(this.x, this.y, this.w, this.h); 
      fill(this.on);
    }
    else {
      noStroke();
      rect(this.x, this.y, this.w, this.h); 
      fill(this.off);        
    }
  }
}

class Digit4 extends Digit {

  Digit4(float x, float y, float w, float h, color off, color on) { 
    this.x = x; 
    this.y = y;
    this.w = w; 
    this.h = h;
    this.off = off; 
    this.on = on;
  }  
  
  void update4(int time) {
    int t = time;
    if (int((((((t + 1) % 32) % 16) % 8) / 4)) == 1) {
      noStroke();
      rect(this.x, this.y, this.w, this.h); 
      fill(this.on);
    }
    else {
      noStroke();
      rect(this.x, this.y, this.w, this.h); 
      fill(this.off);        
    }
  }
}

class Digit8 extends Digit {

  Digit8(float x, float y, float w, float h, color off, color on) { 
    this.x = x; 
    this.y = y;
    this.w = w; 
    this.h = h;
    this.off = off; 
    this.on = on;
  }  
  
  void update8(int time) {
    int t = time;
    if (int(((((t + 1) % 32) % 16) / 8)) == 1) {
      noStroke();
      rect(this.x, this.y, this.w, this.h); 
      fill(this.on);
    }
    else {
      noStroke();
      rect(this.x, this.y, this.w, this.h); 
      fill(this.off);        
    }
  }
}

class Digit16 extends Digit {

  Digit16(float x, float y, float w, float h, color off, color on) { 
    this.x = x; 
    this.y = y;
    this.w = w; 
    this.h = h;
    this.off = off; 
    this.on = on;
  }    
  
  void update16(int time) {
    int t = time;
    if (int(((t + 1) % 32) / 16) == 1) {
      noStroke();
      rect(this.x, this.y, this.w, this.h); 
      fill(this.on);
    }
    else {
      noStroke();
      rect(this.x, this.y, this.w, this.h); 
      fill(this.off);        
    }
  }
}

class Digit32 extends Digit {

  Digit32(float x, float y, float w, float h, color off, color on) { 
    this.x = x; 
    this.y = y;
    this.w = w; 
    this.h = h;
    this.off = off; 
    this.on = on;
  }   
  
  void update32(int time) {
    int t = time;
    if (int((t + 1)/ 32) == 1) {
      noStroke();
      rect(this.x, this.y, this.w, this.h); 
      fill(this.on);
    }
    else {
      noStroke();
      rect(this.x, this.y, this.w, this.h); 
      fill(this.off);        
    }
  }
}

