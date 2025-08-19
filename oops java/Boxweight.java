

public class Boxweight extends Box{
    double weight;
    public void Boxweight()
    {
        this.weight=-1;
    }
    public Boxweight(double h,double l,double w,double weight)
    {super(h,l,w);
        //used to intialise values in parent class
        this.weight=weight;
    }

}