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

  ngOnInit(): void {
  }

  generate(){
    const htmlData = document.getElementById("viewer-container");
   

    let pdf = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: [800, 925]
    });
    pdf.setFontSize(2);

    htmlData?.setAttribute("style", "width: 848px; height:925px");
    console.log("htmlData", htmlData);
    setTimeout(() => {
     
      pdf.html(htmlData as any).then(()=>{

        const pageCount = pdf.getNumberOfPages();
        for(let i = pageCount; i > 1; i--){
          pdf.deletePage(i);
        }
        
        pdf.save("resume.pdf");
      });
    });
    
  }

}
