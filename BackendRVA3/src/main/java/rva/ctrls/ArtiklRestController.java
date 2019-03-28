package rva.ctrls;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import rva.reps.ArtiklRepository;
import rva.jpa.*;

@Api(tags = {"Artikl CRUD operacije"})
@RestController
public class ArtiklRestController {

	@Autowired
	private ArtiklRepository artiklRepository;
	
	@Autowired
	private JdbcTemplate jdbcTemplate; 
	
	@ApiOperation(value = "Vraća kolekciju svih artikla iz baze podataka")
	@GetMapping("artikl")
	public Collection<Artikl> getArtikli() {
		return artiklRepository.findAll();
	}
	
	@ApiOperation(value = "Vraća artikl iz baze podataka čiji je id vrednost prosleđena kao path varijabla")
	@GetMapping("artikl/{id}")
	public Artikl getArtikl(@PathVariable("id") Integer id) {
		return artiklRepository.getOne(id);
	}
	
	@ApiOperation(value = "Vraća kolekciju svih artikala iz baze podataka koji u nazivu sadrže string prosleđen kao path varijabla")
	@GetMapping("artiklNaziv/{naziv}")
	public Collection<Artikl> getArtiklByNaziv(@PathVariable("naziv") String naziv) {
		return artiklRepository.findByNazivContainingIgnoreCase(naziv);
	}
	
	@ApiOperation(value = "Briše artikl iz baze podataka čiji je id vrednost prosleđena kao path varijabla")
	@DeleteMapping("artikl/{id}")
	public ResponseEntity<Artikl> deleteArtikl(@PathVariable("id") Integer id) {
		if(!artiklRepository.existsById(id))
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		artiklRepository.deleteById(id);
		if(id == -100)
			jdbcTemplate.execute(" INSERT INTO \"artikl\"(\"id\", \"naziv\", \"proizvodjac\") VALUES (-100, 'Naziv test', 'Proizvodjac test')" );
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	// insert
	@PostMapping("artikl")
	@ApiOperation(value = "Upisuje artikl u bazu podataka")
	public ResponseEntity<Artikl> insertArtikl(@RequestBody Artikl artikl) {
		if(!artiklRepository.existsById(artikl.getId())) {
			artiklRepository.save(artikl);
			return new ResponseEntity<>(HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.CONFLICT);
	}
	
	// update
	@PutMapping("artikl")
	@ApiOperation(value = "Modifikuje postojeći artikl u bazi podataka")
	public ResponseEntity<Artikl> updateArtikl(@RequestBody Artikl artikl) {
		if(!artiklRepository.existsById(artikl.getId()))
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		artiklRepository.save(artikl);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
}
