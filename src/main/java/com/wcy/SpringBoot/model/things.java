package com.wcy.SpringBoot.model;

/**
 * @author Wcy
 * @Date 2021/3/9 14:02
 */
public class things {
    private Integer id;

    private String things;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getThings() {
        return things;
    }

    public void setThings(String things) {
        this.things = things;
    }

    @Override
    public String toString() {
        return "things{" +
                "id=" + id +
                ", things='" + things + '\'' +
                '}';
    }
}

  