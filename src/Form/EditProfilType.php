<?php

namespace App\Form;

use App\Entity\Users;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;

class EditProfilType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        
        $builder
            
            ->add('name', TextType::class)
            ->add('firstname', TextType::class)
            ->add('age', IntegerType::class)
            ->add('job', TextType::class, [
                'required' => false
            ])
            ->add('postalcode', IntegerType::class, [
                'required' => false
            ])
            ->add('city', TextType::class, [
                'required' => false,
            ])
            

            ->add('pseudo', TextType::class, [
               
            ] )
            ->add('playmo_icon')

            ->add('Valider', SubmitType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Users::class,
        ]);
    }
}
