"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9308],{9308:(J,p,s)=>{s.r(p),s.d(p,{RegistroPageModule:()=>M});var h=s(6814),u=s(95),l=s(3582),c=s(467),g=s(5861),e=s(6689),m=s(4414),_=s(6466),f=s(2396);function T(t,d){if(1&t&&(e.TgZ(0,"ion-select-option",15),e._uU(1),e.qZA()),2&t){const n=d.$implicit;e.Q6J("value",n.id),e.xp6(1),e.Oqu(n.nombre)}}function Z(t,d){if(1&t&&(e.TgZ(0,"ion-select-option",15),e._uU(1),e.qZA()),2&t){const n=d.$implicit;e.Q6J("value",n.id),e.xp6(1),e.Oqu(n.nombre)}}const v=[{path:"",component:(()=>{class t{constructor(n,i,o,a,r){this.navCtrl=n,this.toastCtrl=i,this.authService=o,this.router=a,this.locationService=r,this.username="",this.password="",this.cpassword="",this.name="",this.lname="",this.rut="",this.car="",this.regionSel=0,this.comunaSel=0,this.seleccionComuna=!0,this.regiones=[],this.comunas=[]}registrarse(){var n=this;return(0,g.Z)(function*(){if(""!==n.username&&""!==n.password&&""!==n.cpassword&&""!==n.name&&""!==n.lname&&""!==n.rut&&""!==n.car&&0!==n.regionSel&&0!==n.comunaSel)if(8!=n.rut.length&&isNaN(+n.password))n.showToast("El rut no debe de contener guion ni digito verificador.");else if(n.username.length<4&&n.username.length>8)n.showToast("El nombre de usuario debe contener 4 a 8 caracteres.");else if(n.password.length<4&&n.username.length>8)n.showToast("La contrase\xf1a debe ser un n\xfamero de 4 d\xedgitos.");else if(n.name.length<=1&&n.username.length>8)n.showToast("El nombre debe contener 4 a 8 caracteres.");else if(n.lname.length<=1&&n.password.length>8)n.showToast("El apellido debe contener 4 a 8 caracteres.");else if(n.car.length<=1)n.showToast("Ingrese una carrera valida.");else if(n.password===n.cpassword)try{(yield n.authService.registro(n.username,n.password,n.name,n.lname,n.rut,n.car,n.regionSel,n.comunaSel))?n.router.navigate(["/login"]):n.showToast("Este usuario ya existe.")}catch(i){console.error(i),n.showToast("Error al registrar usuario.")}else n.showToast("Las contrase\xf1as deben de ser iguales.");else n.showToast("Por favor, complete todos los campos")})()}showToast(n){var i=this;return(0,g.Z)(function*(){yield(yield i.toastCtrl.create({message:n,duration:3e3,position:"top"})).present()})()}iraInicio(){this.router.navigate(["/home"])}ngOnInit(){this.cargarRegion()}cargarRegion(){var n=this;return(0,g.Z)(function*(){const i=yield n.locationService.getRegion();n.regiones=i.data})()}cargarComuna(){var n=this;return(0,g.Z)(function*(){n.seleccionComuna=!1;const i=yield n.locationService.getComuna(n.regionSel);n.comunas=i.data})()}static#e=this.\u0275fac=function(i){return new(i||t)(e.Y36(m.SH),e.Y36(m.yF),e.Y36(_.e),e.Y36(c.F0),e.Y36(f.a))};static#n=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-registro"]],decls:49,vars:12,consts:[[1,"ion-padding"],[1,"ion-text-center","ion-padding"],[1,"titulo_principal"],[1,"ion-text-center"],[1,"titulo_secundario"],["position","floating"],["type","text",3,"ngModel","ngModelChange"],["type","password",3,"ngModel","ngModelChange"],["label","Seleccione una Regi\xf3n","placeholder","",3,"ngModel","ionChange","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["label","Seleccione una Comuna","placeholder","",3,"disabled","ngModel","ngModelChange"],[1,"ion-text-center","ion-align-items-center"],["color","success",1,"btn_registro",3,"click"],[1,"div_volver"],[1,"link_volver",3,"click"],[3,"value"]],template:function(i,o){1&i&&(e.TgZ(0,"ion-content",0)(1,"div",1)(2,"ion-text",2),e._uU(3,"Vault-Tec"),e.qZA(),e.TgZ(4,"div",3)(5,"ion-text",4),e._uU(6,"Registrarse"),e.qZA()(),e._UZ(7,"p"),e.qZA(),e.TgZ(8,"ion-item")(9,"ion-label",5),e._uU(10,"Rut"),e.qZA(),e.TgZ(11,"ion-input",6),e.NdJ("ngModelChange",function(r){return o.rut=r}),e.qZA()(),e.TgZ(12,"ion-item")(13,"ion-label",5),e._uU(14,"Nombre"),e.qZA(),e.TgZ(15,"ion-input",6),e.NdJ("ngModelChange",function(r){return o.name=r}),e.qZA()(),e.TgZ(16,"ion-item")(17,"ion-label",5),e._uU(18,"Apellido"),e.qZA(),e.TgZ(19,"ion-input",6),e.NdJ("ngModelChange",function(r){return o.lname=r}),e.qZA()(),e.TgZ(20,"ion-item")(21,"ion-label",5),e._uU(22,"Carrera"),e.qZA(),e.TgZ(23,"ion-input",6),e.NdJ("ngModelChange",function(r){return o.car=r}),e.qZA()(),e.TgZ(24,"ion-item")(25,"ion-label",5),e._uU(26,"Usuario"),e.qZA(),e.TgZ(27,"ion-input",6),e.NdJ("ngModelChange",function(r){return o.username=r}),e.qZA()(),e.TgZ(28,"ion-item")(29,"ion-label",5),e._uU(30,"Contrase\xf1a"),e.qZA(),e.TgZ(31,"ion-input",7),e.NdJ("ngModelChange",function(r){return o.password=r}),e.qZA()(),e.TgZ(32,"ion-item")(33,"ion-label",5),e._uU(34,"Confirme la contrase\xf1a"),e.qZA(),e.TgZ(35,"ion-input",7),e.NdJ("ngModelChange",function(r){return o.cpassword=r}),e.qZA()(),e.TgZ(36,"ion-item")(37,"ion-select",8),e.NdJ("ionChange",function(){return o.cargarComuna()})("ngModelChange",function(r){return o.regionSel=r}),e.YNc(38,T,2,2,"ion-select-option",9),e.qZA()(),e.TgZ(39,"ion-item")(40,"ion-select",10),e.NdJ("ngModelChange",function(r){return o.comunaSel=r}),e.YNc(41,Z,2,2,"ion-select-option",9),e.qZA()(),e.TgZ(42,"ion-content")(43,"div",11)(44,"ion-button",12),e.NdJ("click",function(){return o.registrarse()}),e._uU(45,"Registrarse"),e.qZA()(),e.TgZ(46,"div",13)(47,"a",14),e.NdJ("click",function(){return o.iraInicio()}),e._uU(48,"Volver al inicio"),e.qZA()()()()),2&i&&(e.xp6(11),e.Q6J("ngModel",o.rut),e.xp6(4),e.Q6J("ngModel",o.name),e.xp6(4),e.Q6J("ngModel",o.lname),e.xp6(4),e.Q6J("ngModel",o.car),e.xp6(4),e.Q6J("ngModel",o.username),e.xp6(4),e.Q6J("ngModel",o.password),e.xp6(4),e.Q6J("ngModel",o.cpassword),e.xp6(2),e.Q6J("ngModel",o.regionSel),e.xp6(1),e.Q6J("ngForOf",o.regiones),e.xp6(2),e.Q6J("disabled",o.seleccionComuna)("ngModel",o.comunaSel),e.xp6(1),e.Q6J("ngForOf",o.comunas))},dependencies:[h.sg,u.JJ,u.On,l.YG,l.W2,l.pK,l.Ie,l.Q$,l.t9,l.n0,l.yW,l.QI,l.j9],styles:[".btn_registro[_ngcontent-%COMP%]{margin-top:10px;margin-right:5px;margin-bottom:15px}.titulo_principal[_ngcontent-%COMP%]{font-size:55px}.titulo_secundario[_ngcontent-%COMP%]{font-size:25px}.div_volver[_ngcontent-%COMP%]{position:absolute;margin-top:100px;left:0;padding:10px}.link_volver[_ngcontent-%COMP%]{color:#fff;text-decoration:none}"]})}return t})()}];let C=(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#n=this.\u0275mod=e.oAB({type:t});static#o=this.\u0275inj=e.cJS({imports:[c.Bz.forChild(v),c.Bz]})}return t})(),M=(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#n=this.\u0275mod=e.oAB({type:t});static#o=this.\u0275inj=e.cJS({imports:[h.ez,u.u5,l.Pc,C]})}return t})()}}]);