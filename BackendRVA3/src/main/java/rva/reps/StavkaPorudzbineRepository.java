package rva.reps;

import java.math.BigDecimal;
import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import rva.jpa.Porudzbina;
import rva.jpa.StavkaPorudzbine;

public interface StavkaPorudzbineRepository extends JpaRepository<StavkaPorudzbine, Integer> {	
	Collection<StavkaPorudzbine> findByPorudzbina(Porudzbina p);
	Collection<StavkaPorudzbine> findByCenaLessThanOrderById(BigDecimal cena);
	@Query(value = "select coalesce(max(redni_broj)+1, 1) from stavka_porudzbine where porudzbina = ?1", nativeQuery = true)
	Integer nextRBr (int idPorudzbine);
}
