import Vue from "vue";

Vue.prototype.$neolineN3 = new Promise((resolve, reject) => {
  window.addEventListener("NEOLine.NEO.EVENT.READY", () => {
    const neolineN3 = new NEOLineN3.Init();
    resolve(neolineN3);
  });
});
