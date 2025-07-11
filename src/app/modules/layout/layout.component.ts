import { Component, OnInit } from '@angular/core';
import { jsPDF } from "jspdf";
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {

  constructor(private storeService: StoreService){}

  htmlData: any;
  contact =  {
    Email: 'mailto:tania.dev.ph@gmail.com',
    Linkedin: 'https://www.linkedin.com/in/taniachristian/',
    Github: 'https://github.com/cmtania'
   };

  ngOnInit(): void {
  }

  generate(){
    const htmlData = document.getElementById("builder-container");
    
    htmlData?.classList.add("pdf-view");
   
    let pdf = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: [800, 925],
      precision: 10,
      
    });

    pdf.setFont("helvetica");
    pdf.setFontSize(12);

    console.log("htmlData", htmlData);
    setTimeout(() => {
     
      pdf.html(htmlData as any, {
          margin: [15, 15, 15, 15],
          autoPaging: 'text',
          width: 770, 
          windowWidth: 800,
        }).then(()=>{
        
        const pageCount = pdf.getNumberOfPages();
        // pdf.deletePage(pageCount);

        htmlData?.classList.remove("pdf-view");
        
        pdf.save("my-resume.pdf");
      },
    );
    });
  }

}
