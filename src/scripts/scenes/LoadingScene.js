import Phaser from 'phaser';



class LoadingScene extends Phaser.Scene {

  constructor() {
    super('LoadingScene');

  }

preload(){
    this.load.image('layer1', 'assets/start-button-layer1.png');
    this.load.image('layer2', 'assets/start-button-layer2.png');
}

create(){
    const { height, width } = this.game.config;
    var textConfig={fontSize:'40px',color:'#FFFFFF',fontFamily: 'Menlo'};
    this.text = this.add.text(width/4 , 0,"click on start to begin()",textConfig);


    this.startButton = this.add.image(width/2,height/2, "layer1").setInteractive();
    this.startButton.setDisplaySize(400,400);
    this.startButton.on('pointerover', function(event){
        this.setTexture('layer2');
    });
    this.startButton.on('pointerout', function(event)
    {this.setTexture('layer1')
    });
    this.startButton.on('pointerdown', function(event) {
      this.scene.start('PlayScene');
    },this);

    // this.aGrid = new AlignGrid({scene:this, rows: 11, cols: 11});
    // this.aGrid.showNumbers();
    


}

update(time, delta) {
  this.text.setVisible(!!(Math.floor(time / 500) % 2));
}



}
export default LoadingScene;