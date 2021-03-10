package ru.baikal.ismu.conf.conf.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonView;
import ru.baikal.ismu.conf.conf.controller.UserView;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "tezis")
public class Tezis {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonView(UserView.ForNb.class)
    private Long id;
    @JsonView(UserView.ForNb.class)
    private Long authorId;
    @JsonView(UserView.ForNb.class)
    private String tezisName;
    @JsonView(UserView.ForNb.class)
    @Column (length = 1000)
    private String tezisAnnotation;
    @JsonView(UserView.ForNb.class)
    private Integer tezisType;
    @JsonView(UserView.ForNb.class)
    private Long deskId;
    @JsonView(UserView.ForNb.class)
    private Integer tezisStatus;
    @JsonView(UserView.ForNb.class)
    private Long tezisModeratorId;
    @JsonView(UserView.ForNb.class)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime tezisAddDate;
    @JsonView(UserView.ForNb.class)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime tezisChangeStatusDate;
    @JsonView(UserView.ForNb.class)
    private String filename;
    @JsonView(UserView.ForNb.class)
    private String randomFileName;
    @ManyToOne(fetch = FetchType.EAGER )
    @JoinColumn(name = "authorId", insertable = false, updatable = false )
    @JsonView(UserView.ForUserList.class)
    private User user;


    public Tezis(){

    }



    public Tezis(Long id, Long authorId, String tezisName, String tezisAnnotation, Integer tezisType, Long deskId, Integer tezisStatus,
                 Long tezisModeratorId, LocalDateTime tezisAddDate, LocalDateTime tezisChangeStatusDate, String filename, String randomFileName){
        this.id = id;
        this.authorId =authorId;
        this.tezisName = tezisName;
        this.tezisAnnotation = tezisAnnotation;
        this.tezisType = tezisType;
        this.deskId = deskId;
        this.tezisStatus = tezisStatus;
        this.tezisModeratorId = tezisModeratorId;
        this.tezisAddDate = tezisAddDate;
        this.tezisChangeStatusDate = tezisChangeStatusDate;
        this.filename = filename;
        this.randomFileName = randomFileName;
    }

    public String getFilename() {
        return filename;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }

    public String getRandomFileName() {
        return randomFileName;
    }

    public void setRandomFileName(String randomFileName) {
        this.randomFileName = randomFileName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTezisName() {
        return tezisName;
    }

    public void setTezisName(String tezisName) {
        this.tezisName = tezisName;
    }

    public String getTezisAnnotation() {
        return tezisAnnotation;
    }

    public void setTezisAnnotation(String tezisAnnotation) {
        this.tezisAnnotation = tezisAnnotation;
    }

    public Integer getTezisType() {
        return tezisType;
    }

    public void setTezisType(Integer tezisType) {
        this.tezisType = tezisType;
    }

    public Long getDeskId() {
        return deskId;
    }

    public void setDeskId(Long deskId) {
        this.deskId = deskId;
    }

    public Integer getTezisStatus() {
        return tezisStatus;
    }

    public void setTezisStatus(Integer tezisStatus) {
        this.tezisStatus = tezisStatus;
    }

    public Long getTezisModeratorId() {
        return tezisModeratorId;
    }

    public void setTezisModeratorId(Long tezisModeratorId) {
        this.tezisModeratorId = tezisModeratorId;
    }

    public LocalDateTime getTezisAddDate() {
        return tezisAddDate;
    }

    public void setTezisAddDate(LocalDateTime tezisAddDate) {
        this.tezisAddDate = tezisAddDate;
    }

    public LocalDateTime getTezisChangeStatusDate() {
        return tezisChangeStatusDate;
    }

    public void setTezisChangeStatusDate(LocalDateTime tezisChangeStatusDate) {
        this.tezisChangeStatusDate = tezisChangeStatusDate;
    }

    public Long getAuthorId() {
        return authorId;
    }

    public void setAuthorId(Long authorId) {
        this.authorId = authorId;
    }
}
