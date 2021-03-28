import { templateJitUrl } from '@angular/compiler';
import{Component, OnInit, OnDestroy} from '@angular/core'

@Component({
    selector: 'app-dashboard',
    templateUrl: "./dashboard.component.html",
    styleUrls: ['./dashboard.component.scss'],
})

export class dashboard implements OnInit, OnDestroy {
    title: string = 'Dashboard template string';
    
    ngOnInit(){
        console.log('dasboard ngOnInit')
    }

    ngOnDestroy(){
        console.log('dashboard ngOnDestroy')
    }

    
}