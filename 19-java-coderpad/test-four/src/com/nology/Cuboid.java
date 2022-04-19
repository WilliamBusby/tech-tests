package com.nology;

public class Cuboid extends Rectangle{

    private double height;

    public Cuboid(double width, double length, double height) {
        super(width, length);
        this.height = Math.max(height, 0);
    }

    public double getVolume() {
        return height * getWidth() * getLength();
    }

    public double getHeight() {
        return height;
    }
}
