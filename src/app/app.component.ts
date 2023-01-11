import { Component } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FilledButton';
  focusState=true;
  backGroundButtoncolor='#385DAC';
  buttonTextColor='white';
  myBtn={
    btnBgColor:'#385DAC',
    btnTextColor:'white',
    borderColor:'#385DAC'
    
  }
}
