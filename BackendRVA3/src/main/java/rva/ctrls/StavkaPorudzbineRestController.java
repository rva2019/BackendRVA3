package rva.ctrls;

import java.math.BigDecimal;
import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import rva.jpa.Porudzbina;
import rva.jpa.StavkaPorudzbine;
import rva.reps.PorudzbinaRepository;
import rva.reps.StavkaPorudzbineRepository;

@RestController
public class StavkaPorudzbineRestController {
	
	@Autowired
	private StavkaPorudzbineRepository stavkaPorudzbineRepository;
	@Autowired
	private PorudzbinaRepository porudzbinaRepository;

	@GetMapping(value = "stavkaPorudzbine")
	public Collection<StavkaPorudzbine> getStavkePorudzbine(){
		return stavkaPorudzbineRepository.findAll();
	}

	@GetMapping(value = "stavkaPorudzbine/{id}")
	public ResponseEntity<StavkaPorudzbine> getStavkaPorudzbine(@PathVariable("id") Integer id){
		StavkaPorudzbine stavkaPorudzbine = stavkaPorudzbineRepository.getOne(id);
		return new ResponseEntity<StavkaPorudzbine>(stavkaPorudzbine, HttpStatus.OK);
	}

	@GetMapping(value = "stavkeZaPorudzbinaId/{id}")
	public Collection<StavkaPorudzbine> stavkaPoPorudzbiniId(@PathVariable("id") int id){
		Porudzbina p = porudzbinaRepository.getOne(id);
		return stavkaPorudzbineRepository.findByPorudzbina(p);
	}
	
	@GetMapping(value = "stavkaPorudzbineCena/{cena}")
	public Collection<StavkaPorudzbine> getStavkaPorudzbineCena(@PathVariable("cena") BigDecimal cena){
		return stavkaPorudzbineRepository.findByCenaLessThanOrderById(cena);
	}

	@CrossOrigin
	@DeleteMapping (value = "stavkaPorudzbine/{id}")
	public ResponseEntity<StavkaPorudzbine> deleteStavkaPorudzbine(@PathVariable("id") Integer id){
		if(!stavkaPorudzbineRepository.existsById(id))
			return new ResponseEntity<StavkaPorudzbine>(HttpStatus.NO_CONTENT);
		stavkaPorudzbineRepository.deleteById(id);
		return new ResponseEntity<StavkaPorudzbine>(HttpStatus.OK);
	}

	//insert
	@CrossOrigin
	@PostMapping(value = "stavkaPorudzbine")
	public ResponseEntity<Void> insertStavkaPorudzbine(@RequestBody StavkaPorudzbine stavkaPorudzbine){
		if(stavkaPorudzbineRepository.existsById(stavkaPorudzbine.getId()))
			return new ResponseEntity<Void>(HttpStatus.CONFLICT);
		stavkaPorudzbine.setRedniBroj(stavkaPorudzbineRepository.nextRBr(stavkaPorudzbine.getPorudzbina().getId()));
		stavkaPorudzbineRepository.save(stavkaPorudzbine);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}

	//update
	@CrossOrigin
	@PutMapping(value = "stavkaPorudzbine")
	public ResponseEntity<Void> updateStavkaPorudzbine(@RequestBody StavkaPorudzbine stavkaPorudzbine){
		if(!stavkaPorudzbineRepository.existsById(stavkaPorudzbine.getId()))
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		stavkaPorudzbineRepository.save(stavkaPorudzbine);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
}
