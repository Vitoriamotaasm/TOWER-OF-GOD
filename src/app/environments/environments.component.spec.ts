import { environment } from '../environments/environment';  // Verifique o caminho correto

describe('Environment Configuration', () => {

  it('should have a production flag set to false in development', () => {
    expect(environment.production).toBeDefined();  // Verifica se a propriedade "production" está definida
    expect(environment.production).toBe(false);  // Verifica se o valor é "false" no ambiente de desenvolvimento
  });

  it('should have Firebase configuration', () => {
    expect(environment.firebase).toBeDefined();  // Verifica se a configuração do Firebase está definida
    expect(environment.firebase.apiKey).toBeDefined();  // Verifica se a apiKey do Firebase está definida
    expect(environment.firebase.authDomain).toBeDefined();  // Verifica se o authDomain está definido
    expect(environment.firebase.projectId).toBeDefined();  // Verifica se o projectId do Firebase está definido
    expect(environment.firebase.storageBucket).toBeDefined();  // Verifica se o storageBucket está definido
    expect(environment.firebase.messagingSenderId).toBeDefined();  // Verifica se o messagingSenderId está definido
    expect(environment.firebase.appId).toBeDefined();  // Verifica se o appId está definido
  });

});
