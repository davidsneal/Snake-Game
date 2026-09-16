import turtle
import random
import time
global direction

# this was made on 07/03/2026
#variables
direction="stop"
score=0
over=0
speed=0.2

#score display
scoreshow=turtle.Turtle()
scoreshow.penup()
scoreshow.goto(0,320)
scoreshow.hideturtle()
scoreshow.color("lightCyan4")

#lsits
segments=[]
colors=["green1", "green2"]

# screen
window=turtle.Screen()
#border looks
outside=turtle.Turtle()
outside.penup()
outside.hideturtle()
outside.shape("square")
outside.shapesize(31.5,31.5)
outside.color("ForestGreen")

#playing feild
game=turtle.Turtle()
game.hideturtle()
game.color("GreenYellow")
game.penup()
game.goto(0,0)
game.shape("square")
game.shapesize(stretch_wid=31,stretch_len=31)


#snake head
head=turtle.Turtle()
head.hideturtle()
head.speed(0)
head.penup()
head.color("green4")
head.shape("square")
head.shapesize(stretch_wid=1,stretch_len=1)
head.goto(0,0)
segments.append(head)
direction=("stop")

# eyes
eye1=turtle.Turtle()
eye1.hideturtle()
eye1.penup()
eye1.shape("circle")
eye1.shapesize(0.2,0.2)
eye1.goto(head.xcor()+5,head.ycor()+5)
eye1.color("white")


eye2=turtle.Turtle()
eye2.hideturtle()
eye2.penup()
eye2.shape("circle")
eye2.shapesize(0.2,0.2)
eye2.color("white")
eye2.goto(head.xcor()-5,head.ycor()+5)


pupil1=turtle.Turtle()
pupil1.hideturtle()
pupil1.penup()
pupil1.shape("circle")
pupil1.shapesize(0.1,0.1)
pupil1.goto(head.xcor()+5.1,head.ycor()+5.1)


pupil2=turtle.Turtle()
pupil2.penup()
pupil2.shape("circle")
pupil2.shapesize(0.1,0.1)
pupil2.goto(head.xcor()-5.1,head.ycor()+5.1)
pupil2.hideturtle()#snake movement
window.tracer(0)
def head_up():
    global direction
    direction="up"
def head_down():
    global direction
    direction="down"
def head_left():
    global direction
    direction="left"
def head_right():
    global direction
    direction="right"
window.listen()
window.onkeypress(head_up,"Up")
window.onkeypress(head_down,"Down")
window.onkeypress(head_left,"Left")
window.onkeypress(head_right,"Right")

#create food
food=turtle.Turtle()
food.color("red")
food.penup()
food.shape("circle")
food.shapesize(stretch_wid=0.95,stretch_len=0.95)
a = random.randint(-14,14)*20
b = random.randint(-14,14)*20
food.goto(a,b)
window.tracer()
food.hideturtle()
# stem
stem=turtle.Turtle()
stem.penup()
stem.shape("square")
stem.color("goldenrod4")
stem.shapesize(0.4,0.2)
stem.goto(food.xcor(),food.ycor()+10)
stem.hideturtle()

# starting screen
window.bgcolor("honeydew2")
pen=turtle.Turtle()
pen.penup()
pen.color("DodgerBlue4")
pen.write("PRESS SPACE TO START",align="center",font=("Futara",80))
window.listen()
def start():
    head.showturtle()
    game.showturtle()
    pen.hideturtle()
    food.showturtle()
    window.bgcolor("khaki")
    eye1.showturtle()
    eye2.showturtle()
    pupil1.showturtle()
    pupil2.showturtle()
    stem.showturtle()
    outside.showturtle()
    pen.clear()
window.onkeypress(start,"space")
while True :
    window.update()
    scoreshow.write("score={}".format(score),align="center",font=("Futara",36))
    for i in range (len(segments)-1,0,-1):
        x=segments[i-1].xcor()
        y=segments[i-1].ycor()
        segments[i].goto(x,y)
    if direction=="up":
        y=head.ycor()
        y+=20
        head.sety(y)
        time.sleep(speed)
    if direction == "down":
        y=head.ycor()
        y-=20
        head.sety(y)
        time.sleep(speed)
    if direction == "left":
        x=head.xcor()
        x-=20
        head.setx(x)
        time.sleep(speed)
    if direction =="right":
        x=head.xcor()
        x+=20
        head.setx(x)
        time.sleep(speed)
    eye1.goto(head.xcor()+5,head.ycor()+5)
    eye2.goto(head.xcor()-5,head.ycor()+5)
    pupil2.goto(head.xcor()-5.1,head.ycor()+5.1)
    pupil1.goto(head.xcor()+5.1,head.ycor()+5.1)
    


    if food.distance(head)<20 :
        new_segment=turtle.Turtle()
        new_segment.hideturtle()
        new_segment.shape("square")
        new_segment.penup()
        new_segment.shapesize(0.9,1)
        new_segment.hideturtle()
        new_segment.color(colors[len(segments)%2])
        segments.append(new_segment)
        
        a = random.randint(-14,14)*20
        b = random.randint(-14,14)*20
        new_segment.showturtle()
        food.goto(a,b)
        stem.goto(food.xcor(),food.ycor()+10)
        score=score+1
        scoreshow.clear()
        scoreshow.write("score={}".format(score),align="center",font=("Futara",36))
        if speed >0.05:
            speed-=0.004
        eye1.goto(head.xcor()+5,head.ycor()+5)
        eye2.goto(head.xcor()-5,head.ycor()+5)
        pupil2.goto(head.xcor()-5.1,head.ycor()+5.1)
        pupil1.goto(head.xcor()+5.1,head.ycor()+5.1)


        eye1.goto(head.xcor()+5,head.ycor()+5)
        eye2.goto(head.xcor()-5,head.ycor()+5)
        pupil2.goto(head.xcor()-5.1,head.ycor()+5.1)
        pupil1.goto(head.xcor()+5.1,head.ycor()+5.1)

        

        
    #self collision
    for segment in segments[1:]:
        if segment.distance(head)<20:
            over=1

    # border collision
    if head.ycor()>300:
        over=1
    if head.ycor()<-300:
        over=1
    if head.xcor()>300:
        over=1
    if head.xcor()<-300:
        over=1
    if over==1:
        window.bgcolor("black")
        lose=turtle.Turtle()
        lose.write("YOU LOSE",align="center",font=("courier",80))
        lose.color("red")
        lose.penup()
        
        

        
        
        

    


