import Game from 'tsxna-framework/Game';
import GameCanvas from 'tsxna-framework/GameCanvas';
import SpriteBatch from 'tsxna-framework/Graphics/SpriteBatch';
import GameTime from 'tsxna-framework/GameTime';
import Color from 'tsxna-framework/Color';
import Texture2D from 'tsxna-framework/Content/Texture2D';
import DrawCallParameter from 'tsxna-framework/Graphics/DrawCallParameter';
import Vector2 from 'tsxna-framework/Vector2';
import Song from 'tsxna-framework/Content/Song';
import KeyboardState from 'tsxna-framework/Input/KeyboardState';
import Keyboard from 'tsxna-framework/Input/Keyboard';
import Keys from 'tsxna-framework/Input/Keys';


export default class MyGame extends Game {

    private _spriteBatch:SpriteBatch;
    private _bloc:Texture2D;
    
    //private _music:Song;

    private _currentKeyboardState:KeyboardState;
    private _blocPosition:Vector2 = new Vector2(160,120);


    constructor(){
        super();
        
        this.Canvas = new GameCanvas(320,170);
        this.Canvas.AutoScale = true;
        this._spriteBatch = new SpriteBatch(this.Canvas);       
       
    }

    public async LoadContent(){
        super.LoadContent();
        this._bloc = await this.Content.Load(Texture2D, "Content/images/bloc.png");

        // this._music = await this.Content.Load(Song,"Content/musics/background.mp3");
        // this._music.Play();

    }

    public Update(gameTime:GameTime){
        super.Update(gameTime);
     //   console.log(gameTime)
        this._currentKeyboardState = Keyboard.GetState();
        if(this._currentKeyboardState.IsKeyDown(Keys.ArrowLeft))
            this._blocPosition.X -= 200*gameTime.ElapsedGameTime;
        if(this._currentKeyboardState.IsKeyDown(Keys.ArrowRight))
            this._blocPosition.X += 200*gameTime.ElapsedGameTime;
        
        if(this._currentKeyboardState.IsKeyDown(Keys.ArrowUp))
            this._blocPosition.Y -= 200*gameTime.ElapsedGameTime;
        if(this._currentKeyboardState.IsKeyDown(Keys.ArrowDown))
            this._blocPosition.Y += 200*gameTime.ElapsedGameTime;
        
    }

    public Draw():void{
        this.Canvas.Clear(Color.Black);
        this._spriteBatch.Begin();

        this._spriteBatch.Draw(new DrawCallParameter(this._bloc).setPosition(this._blocPosition));
        
       this._spriteBatch.End();
    }


}