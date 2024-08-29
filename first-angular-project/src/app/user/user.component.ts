import { Component, Input, input, computed, Output, output, EventEmitter} from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  @Input({required: true}) user!: User;
  @Output() select = new EventEmitter<string>();
  @Input({required: true}) selected! : boolean;

  //avatar = input.required<string>();
  //name = input.required<string>();
  // select = output<string>()
  imagePath = computed(() => { 
    return 'assets/users/'+ this.user.avatar;
  })
  onSelectedUser() {
    this.select.emit(this.user.id);
  }
 
}
