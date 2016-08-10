(function (root, factory) {
  if(typeof module === "object" && module.exports){
    module.exports = factory(require("anteadamovicnpmtest"));
  }
  else{
    root.anteAdamovicNpmTest = factory("anteadamovicnpmtest");
  }
}(this, function(){
  return {
    test: function(){
      return "anteAdamovic-testFunction";
    }
  }
}));
