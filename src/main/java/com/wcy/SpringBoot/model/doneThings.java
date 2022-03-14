package com.wcy.SpringBoot.model;

/**
 * @author Wcy
 * @Date 2021/3/9 14:32
 */
public class doneThings {
    private  int id;
    private  String things;
    private  String time;
    private  String name;
    private  String describe;
    private int play;

    public int getPlay() {
        return play;
    }

    public void setPlay(int play) {
        this.play = play;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getThings() {
        return things;
    }

    public void setThings(String things) {
        this.things = things;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescribe() {
        return describe;
    }

    public void setDescribe(String describe) {
        this.describe = describe;
    }

    @Override
    public String toString() {
        return "doneThings{" +
                "id=" + id +
                ", things='" + things + '\'' +
                ", time='" + time + '\'' +
                ", name='" + name + '\'' +
                ", describe='" + describe + '\'' +
                '}';
    }
}
