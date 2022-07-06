<?php

namespace App\Form;

use App\Entity\Pages;
use App\Entity\Users;
use App\Form\PagesType;
use App\Repository\PagesRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\BirthdayType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;

class UsersType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('email')
            ->add('roles', ChoiceType::class, [
                'choices' => [
                    'Utilisateur' => 'ROLE_USER',
                    'Collectionneur' => 'ROLE_KOLLECTOR',
                    'Administrateur' => 'ROLE_ADMIN'
                ],
                'expanded' => true,
                'multiple' => true,
                'label' => 'Rôles' ,
            ])
            ->add('password', PasswordType::class, [
                'mapped' => false,
                'attr' => ['autocomplete' => 'new-password'],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez entrer un mot de passe',
                    ]),
                    new Length([
                        'min' => 6,
                        'minMessage' => 'Votre mot de passe doit comporter au moins 6 caractères',
                        'max' => 25,
                    ]),
                ],
            ])
            // ->add('isVerified')
            ->add('page', EntityType::class, [
                'class' => Pages::class,
                'required' => false,
                'empty_data' => 'Non'
            ])
            ->add('name', TextType::class, [
                'required' => false,
                'empty_data' => 'Non renseigné'
            ])
            ->add('firstname', TextType::class, [
                'required' => false,
                'empty_data' => 'Non renseigné'
            ])
            ->add('age', BirthdayType::class)
            ->add('job', TextType::class, [
                    'required' => false,
                    'empty_data' => 'Non renseigné'
            ])
            ->add('postalcode', IntegerType::class,[
                'empty_data' => 00000
            ])
            ->add('city', TextType::class,[
                'required' => false,
                'empty_data' => 'Non renseigné'
            ])
            ->add('pseudo')
            // ->add('playmo_icon', FileType::class, [
            //     'multiple' => false,
            //     'data_class' => null,
            // ])

            ->add('Enregister', SubmitType::class,[
                'attr' => ['class' =>"btn_play"]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Users::class,
        ]);
    }
}
