var canvas=document.getElementById ('mycanvas')
var context=canvas.getContext ("2d")
var roverwidth=100
var roverheight=90
var backgroundimage="mars.jpg"
var roverimage="rover.png"
var roverx=10
var rovery=10
var bgimage,roverbg
function add()  {
     bgimage=new Image() 
    bgimage.onload=uploadbg()
    bgimage.src=backgroundimage

     roverbg=new Image()
    roverbg.onload=uploadroverbg()
    roverbg.src=roverimage
}

function uploadbg  () {
    context.drawImage(bgimage,0,0,canvas.width,canvas.height)
}
function uploadroverbg () {
context.drawImage(roverbg,roverx,rovery,roverwidth,roverheight)
}
window.addEventListener("keydown",kd)
function kd (e)    {
    var keypress=e.keyCode
    if (keypress=="38") {
        up()

    }
    if (keypress=="40") {
        down()
        
    }
    if (keypress=="37") {
        left()
        
    }
    if (keypress=="39") {
        right()
        
    }

    
}

function up () {
    if (rovery>=0)  {
        rovery=rovery-10
        uploadroverbg()
        uploadbg()
    
        
    }
        }
    
        function down () {
            if (rovery<=500)  {
                rovery=rovery+10
                uploadroverbg()
                uploadbg()
                
                
            }
                }
    
                function left () {
                    if (roverx>=0)  {
                        roverx=roverx-10
                        uploadroverbg()
                        uploadbg()
                        
                        
                    }
                        }
    
                        function right () {
                            if (roverx<=700)  {
                                roverx=roverx+10
                                uploadroverbg()
                                uploadbg()
                                
                                
                            }
                                }