import { ThemePalette } from "@angular/material/core";
import { ProgressSpinnerMode } from "@angular/material/progress-spinner";

export class SpinnerConfig{
    private  color: ThemePalette = 'primary';
    private mode: ProgressSpinnerMode = 'indeterminate';
    private diameter:number = 15;

    public getColor():ThemePalette{
        return this.color;
    }
    public getMode():ProgressSpinnerMode{
        return this.mode;
    }
    public getDiameter():number{
        return this.diameter;
    }
    
    private static instance:SpinnerConfig;
    private constructor(){

    }

    public static getInstance(){
        if(!this.instance){
            SpinnerConfig.instance = new SpinnerConfig();
        }
        return SpinnerConfig.instance;
    }
    


    
}