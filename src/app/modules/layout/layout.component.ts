import { Component, OnInit } from '@angular/core';
import { jsPDF } from "jspdf";

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {

  constructor(){}

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
      precision: 10
    });

    pdf.setFont("sans-serif");

    console.log("htmlData", htmlData);
    setTimeout(() => {
     
      pdf.html(htmlData as any).then(()=>{

        const pageCount = pdf.getNumberOfPages();
        for(let i = pageCount; i > 1; i--){
          pdf.deletePage(i);
        }

        htmlData?.classList.remove("pdf-view");
        
        pdf.save("my-resume.pdf");
      });
    });
    
  }

}
