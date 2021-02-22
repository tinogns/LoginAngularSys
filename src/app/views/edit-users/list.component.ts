import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ApiService} from '../../controllers/api.service';
import { ActivatedRoute, Router } from '@angular/router';
declare var $: any;

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
  // first_name : string;
  // phone : string;
  // email : string;
  // id : number;
 // สร้างตัวแปรมารับค่าจาก API
  // เก็บข้อมูลทั้งหมด
  datauser:any = [];
  first_name: string;
  email: string;
  phone: string;
  id: string;
  // เก็บรายละเอียด
  datauserByID = {

    "first_name":"",
    "email":"",
    "phone":"",
    
    // "nationalid":""
   
  }

  // สร้างตัวแปรกำหนดค่าบนฟอร์มเพิ่มข้อมูล
  datauserAdd = {
    "first_name":"",
    "email":"",
    "phone":"",
  }

  // สร้างตัวแปรสำหรับดึงข้อมูลแสดงบนฟอร์มเพื่อแก้ไข
  datauserEdit = {
    "id":"",
    "first_name":"",
    "email":"",
    "phone":"",
  }

  constructor(
    private api: ApiService,
    private http: HttpClient,
    private route: ActivatedRoute,private router: Router
    ) { }

    

  ngOnInit(): void {
    this.fetchData();
    // this.http.get('/assets/datausers.json').subscribe((result: datausers[]) => {
    //   this.datauserss = result;
    // }))

   
    
  }

  fetchData(){  // fetch คือการดึงข้อมูล

    this.api.getData().subscribe(res => {
      console.log(res);
      this.datauser = res.data;
    })
    

  }

  viewData(id){  // ถ้าส่งข้อมูลมาเป็น Array ต้อง มี [0] หลัง res.data
    this.api.getdata(id).subscribe(res => {
      console.log(res)
      this.datauserByID.first_name = res.data.first_name;
      this.datauserByID.email = res.data.email;
      this.datauserByID.phone = res.data.phone;
        ($('#modalDetail') as any).modal('show');
    })
  
  }


  submitAdd(){
    this.api.createdata(this.datauserAdd).subscribe(res => {
      this.datauserAdd.first_name = res.data[0].first_name;
      this.datauserAdd.email = res.data[0].email;
      this.datauserAdd.phone = res.data[0].phone;
        alert("บันทึกข้อมูลเรียบร้อย");
        ($('#modaladd') as any).modal('hide');
        // โหลดข้อมูล
        this.fetchData();
        // เคลียร์ค่าในฟอร์ม
        this.datauserAdd = {
            "first_name":"",
            "email":"",
            "phone":"",
        }
    })
  }

  editData(id){
    this.api.getdata(id).subscribe(res => {
      this.datauserEdit.id = res.data.id;
      this.datauserEdit.first_name = res.data.first_name;
      this.datauserEdit.email = res.data.email;
      this.datauserEdit.phone = res.data.phone;
      
      
      ($('#modalEdit') as any).modal('show');
    })
  }

  submitEdit(){
    //alert(this.dataEdit.data_id);
    this.api.updatedata((this.datauserEdit.id), this.datauserEdit).subscribe(res => {
      alert("แก้ไขข้อมูลเรียบร้อย");
      ($('#modalEdit') as any).modal('hide');
      // โหลดข้อมูล
      this.fetchData();
      // เคลียร์ค่าในฟอร์ม
      this.datauserEdit = {
        "id":"",
        "first_name":"",
        "email":"",
        "phone":"",
      }
    });
  }


  deleteData(id){
    if(window.confirm('Are you sure, to delete this record?')){
      this.api.delete(this.datauser.id).subscribe(res =>{
        this.fetchData();
      });
    }
    // this.api.delete(id).subscribe(res => {
    //   this.fetchData();
    // })
  }


 
}