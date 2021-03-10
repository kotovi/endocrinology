package ru.baikal.ismu.conf.conf.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.baikal.ismu.conf.conf.domain.Tezis;

import java.util.List;

public interface TezisRepo extends JpaRepository<Tezis, Long> {
    List<Tezis> findByAuthorId(Long authorId);
    List<Tezis> findByDeskIdAndTezisStatus(Long deskId, Integer tezisStatus);
    List<Tezis> findAllByTezisStatus(Integer tezisStatus);
    List<Tezis> findAllByTezisStatusAndDeskIdIn(Integer tezisStatus, List<Long> deskId);
}
