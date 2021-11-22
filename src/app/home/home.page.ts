import { Task } from './../interfaces/task';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  arrayElementos=[
    {
      producto: 'Audi R8 2019', 
      precio:526000452,
      descripcion:'En su actualización de media vida, el Audi R8 2019 presenta una nueva imagen y mejoras en el apartado mecánico con un motor V10 de mayor potencia. Se mantienen las carrocerías Coupé y Spyder', 
      imagen:'https://www.elcarrocolombiano.com/wp-content/uploads/2018/10/20181025-AUDI-R8-2019-CARACTERISTICAS-FICHA-TECNICA-01.jpg', 
      
    },
    {
      producto: 'Audi A4', 
      precio:864561897,
      descripcion:'Gracias al diseño progresivo con un aspecto frontal renovado y una parte trasera característica, el carácter deportivo del Audi A4 Sedán destaca más que nunca: un interior premium y funcional, tecnologías innovadoras en los ámbitos de la digitalización, el infotainment y los sistemas de asistencia al conductor, y una gama de potentes motores completan el paquete.', 
      imagen:'https://awscdn.audi.com.co/media/GalleryThumbnails_Slider_Image_Component/75218-793966-slider-491669/dh-1308-a9ad28/a4a48ad8/1632839085/1920x1080-aa4-l-191001-oe.jpg', 
      
    },
    {
      producto: 'Audi Q2', 
      precio:564891561654,
      descripcion:'El SUV urbano impresiona con su potente diseño, una amplia gama de opciones de infoentretenimiento y tecnología de chasis dinámico. Aspectos destacados como la dirección progresiva y el asistente de conducción adaptable opcional garantizan comodidad y placer de conducción, no solo en la ciudad.', 
      imagen:'https://awscdn.audi.com.co/media/GalleryThumbnails_Slider_Image_Component/62362-616529-slider-376133/dh-1308-a9ad28/067da770/1627891420/audi-galerie-1.jpg', 
      
    },
    {
      producto: 'Audi Q5 Sportback', 
      precio:1354651684,
      descripcion:'Extraordinariamente deportivo. Ampliamente espacioso. Y sumamente cómodo. El nuevo Audi Q5 Sportback redefine la categoría SUV con una personalidad que cautiva a primera vista. Sorprende a todos con su diseño Sportback y disfruta de una dinámica de conducción extraordinaria gracias a la tracción integral quattro con tecnología ultra. Déjate sorprender.', 
      imagen:'https://awscdn.audi.com.co/media/GalleryThumbnails_Slider_Image_Component/67144-678913-slider-416997/dh-1308-a9ad28/b8dcc05c/1627887114/a205995-medium.jpg', 
      
    },
    {
      producto: 'Audi R8 Spyder V10 performance quattro', 
      precio:464651384655,
      descripcion:'Sentir sin límites. Sorprenderse sin límites. Disfrutar sin límites. Al subir en el Audi R8 Spyder V10 performance quattro de 456 kW (620 CV) notarás que tu mundo cambia por completo. Y al conducirlo, sentirás que todo se mueve de forma distinta. Porque ahora tú tienes el control. Y cualquier cosa que quieras hacer, podrás hacerla… sin límites.', 
      imagen:'https://awscdn.audi.com.co/media/GalleryThumbnails_Slider_Image_Component/59635-584786-slider-355894/dh-1324-a9ad28/c4698ba8/1627886364/1920x1080-ar8-d-181003.jpg', 
      
    },
    {
      producto: 'Audi R8 Coupé V10 performance quattro Deportivo', 
      precio:213546154855,
      descripcion:'El Audi R8 Coupé V10 performance quattro lleva la competición en sus genes. Su poder se hace patente en el exterior a través las poderosas tomas de aire situadas junto a la amplia parrilla Audi Singleframe. El difusor elevado en la zaga. O sus marcadas líneas laterales, que son un indicador de la posición del motor central. Y es que este coupé de 456 Kw (620 CV) marca la frontera entre la carretera y el mundo de la competición.', 
      imagen:'https://awscdn.audi.com.co/media/GalleryThumbnails_Slider_Image_Component/59638-584848-slider-355909/dh-1324-a9ad28/6511c1a9/1627892465/1920x1080-ar8-181009.jpg', 
      
    },
   
  ]
  
  tasks: Task[]=[];

  constructor(private alertinformacion:AlertController, private taskService: TaskService) {}

  async alertInfor() {
   
      const alert = await this.alertinformacion.create({
       cssClass: 'my-custom-class',
        header: '¡MENSAJE!',
        message:  'Gracias por indicar que te gusta esta obra de arte',
        
        buttons: ['Cerrar', 'Aceptar'],
      });
  
      await alert.present();
  
      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    }
    ngOnInit() {
      this.taskService.getAllTasks()
      .subscribe(tasks=>{
      console.log(tasks);
      this.tasks=tasks;
      });
      }

  
}
