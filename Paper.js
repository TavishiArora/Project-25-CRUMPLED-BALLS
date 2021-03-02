class Paper
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2	
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
        this.body= loadImage("Project-25/paper.png")
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			//fill(128,128,128)
			rectMode(0,0,this.w, this.h);
			//pop()
			
	}

}