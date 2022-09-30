import './auth.css'

export function Auth(){
    return(
        <div className="container" >
        <a className="links" id="paracadastro" href="/">cadastro</a>
        <a className="links" id="paralogin" href="/">login</a>
         
        <div class="content">      
          <div id="login">
            <form method="post" action=""> 
              <h1>Login</h1> 
              <p> 
                <label for="email_login">Seu e-mail</label>
                <input id="email_loginn" name="email_login" required="required" type="text" placeholder="ex. contato@htmlecsspro.com"/>
              </p>
               
              <p> 
                <label for="senha_login">Sua senha</label>
                <input id="senha_login" name="senha_login" required="required" type="password" placeholder="ex. senha" /> 
              </p>
 
              <p> 
                <input type="submit" value="Logar" /> 
              </p>
               
              <p class="link">
                Ainda não tem conta?
                <a href="#paracadastro">Cadastre-se</a>
              </p>
            </form>
          </div>
     
          <div id="cadastro">
            <form method="post" action=""> 
              <h1>Cadastro</h1> 
               
              <p> 
                <label for="nome_cad">Seu nome</label>
                <input id="nome_cad" name="nome_cad" required="required" type="text" placeholder="nome" />
              </p>
               
              <p> 
                <label for="email_cad">Seu e-mail</label>
                <input id="email_cad" name="email_cad" required="required" type="email" placeholder="contato@htmlecsspro.com"/> 
              </p>
               
              <p> 
                <label for="senha_cad">Sua senha</label>
                <input id="senha_cad" name="senha_cad" required="required" type="password" placeholder="ex. 1234"/>
              </p>
               
              <p> 
                <input type="submit" value="Cadastrar"/> 
              </p>
               
              <p class="link">  
                Já tem conta?
                <a href="#paralogin"> Ir para Login </a>
              </p>
            </form>
          </div>
        </div>
      </div>  
    )
}