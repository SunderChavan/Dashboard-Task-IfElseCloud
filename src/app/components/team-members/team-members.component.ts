import { Component, inject, HostListener } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { NgxPaginationModule } from 'ngx-pagination';

interface TableHeader {
  column_name: string;
  column_key: string,
  type: string,
  align: string
}

@Component({
  selector: 'app-team-members',
  standalone: true,
  imports: [NgxPaginationModule],
  templateUrl: './team-members.component.html',
  styleUrl: './team-members.component.scss',
})

export class TeamMembersComponent {
  _masterService = inject(MasterService);
  teamMembersData: any;
  tableHeaders: TableHeader[] = [];
  membersCount: number = 0;
  totalPages: number = 0;
  p: number = 1;
  itemsPerPage: number = 10;
  pagedTeamMembersData: any[] = [];
  showEditPopup = false;
  editData: any = '';
  isLoading: boolean = false;
  deletConfirmationPopup: boolean = false;
  sancbar: boolean = false;
  deleteData :any ='';

  ngOnInit(): void {
    this.getTeamData();
  }

  getTeamData() {
    this.isLoading = true;
    this._masterService.getTeamMembersData().subscribe((result: any) => {
      this.tableHeaders = result.grid_columns;
      this.teamMembersData = result.grid_data.map((item: any) => {
        return {
          ...item,
          isChecked: false,
          newemail: item.email.split('@')[0]
        }
      });
      this.membersCount = this.teamMembersData.length;
      this.updatePagedData();

      // I have added 1s timeout to show loader as data is coming very fast.      
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);

    })
  }

  updatePagedData() {
    const start = (this.p - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.pagedTeamMembersData = this.teamMembersData.slice(start, end);
  }

  onPageChange(page: number) {
    this.p = page;
    this.updatePagedData();
  }

  goToPreviousPage() {
    if (this.p > 1) {
      this.p--;
      this.updatePagedData();
    }
  }

  goToNextPage() {
    const totalPages = Math.ceil(this.teamMembersData.length / this.itemsPerPage);
    this.totalPages = totalPages;

    if (this.p < totalPages) {
      this.p++;
      this.updatePagedData();
    }
  }

  selectAll(event: any) {
    const isChecked = event.target.checked;
    this.teamMembersData = this.teamMembersData.map((item: any) => ({
      ...item,
      isChecked
    }));
  }

  singleSelect(item: any, event: any) {
    const isChecked = event.target.checked;
    this.teamMembersData.forEach((ele: any) => {
      if (ele.id == item.id) {
        ele["isChecked"] = isChecked;
      }
    });
  }

  toggleEditPopup(data: any) {
    console.log(data)
    this.editData = data;

    this.showEditPopup = !this.showEditPopup;

  }

  @HostListener('document:click', ['$event'])
  closePopup(event: Event) {
    // Close the popup only if clicking outside
    const targetElement = event.target as HTMLElement;
    if (this.showEditPopup && !targetElement.closest('.edit-tooltip-box') && !targetElement.closest('.editBtn')) {
      this.showEditPopup = false;
    }
    if (this.deletConfirmationPopup && !targetElement.closest('.delete-tooltip-box') && !targetElement.closest('.deletBtn')) {
      this.deletConfirmationPopup = false;
    }
  }

  toggleDeletePopup(data: any) {
    this.deletConfirmationPopup = true;
    this.deleteData = data;
  }
  
  delete(){
    let newList = [];
    newList = this.teamMembersData;
    let index = newList.findIndex((item: any) => item.id == this.deleteData.id)
  
    if (index > -1) {
      newList.splice(index, 1);
      this.teamMembersData = newList;
      this.membersCount = this.teamMembersData.length;
      this.deletConfirmationPopup = false;
      this.sancbar = true
      
      setTimeout(() => {
        this.sancbar = false;        
      }, 700);
    }
  }

  cancle(){
    this.deleteData = '';
    this.deletConfirmationPopup = false;
  }
}
