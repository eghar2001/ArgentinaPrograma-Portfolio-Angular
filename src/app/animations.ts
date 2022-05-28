import { animate, keyframes, query, stagger, state, style, transition, trigger } from "@angular/animations";


export let laFade = trigger('laFade', [
    transition('* => *', [ // each time the binding value changes
      
      query(':enter', [
        style({ opacity: 0 }),
        stagger('0.1s', [
          animate('0.2s', style({ opacity: 1 }))
        ])
      ])
    ])
     
])
export let laDownToUp = trigger('laDownToUp', [
    transition('* => *', [ // each time the binding value changes
      
      query(':enter', [
        style({ transform:'translateY(100%)',opacity:0 }),
        stagger('0.1s', [
          animate('0.2s', style({transform:'translateY(0)',opacity:1}))
        ])
      ])
    ])
]) 

export let routerAnim= trigger('routeAnimations',[
    transition('* <=> Portfolio',[
        style({transform:'translateX(100%)',opacity:0}),
        animate('0.5s ease-out',keyframes([
            style({transform:'translateX(0%)',opacity:1}),
            

        ]))
    ]),
    transition('* <=>*',[
        style({transform:'translateY(100%)',opacity:0}),
        animate('0.5s ease-out',keyframes([
            style({transform:'translateY(0%)',opacity:1}),
            

        ]))
    ])
    
])