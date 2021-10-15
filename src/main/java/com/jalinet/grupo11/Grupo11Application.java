package com.jalinet.grupo11;

import com.jalinet.grupo11.service.CustomeController;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
//@ComponentScan(basePackageClasses = CustomeController.class)
public class Grupo11Application {

	public static void main(String[] args) {
		SpringApplication.run(Grupo11Application.class, args);
                int i = 1;
	}
      	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/Custome/all").allowedOrigins("http://132.226.240.254/");
                                registry.addMapping("/Custome/save").allowedOrigins("http://132.226.240.254/");
				registry.addMapping("/Category/all").allowedOrigins("http://132.226.240.254/");
                                registry.addMapping("/Category/save").allowedOrigins("http://132.226.240.254/");
			}
		};
	}

}
